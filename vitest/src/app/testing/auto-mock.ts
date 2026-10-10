import { Provider, Type } from '@angular/core';
import { Mocked, vi } from 'vitest';

type MockObject = Record<string, unknown>;

export function autoMock<T>(type: Type<T>): Mocked<T> {
  const mock: MockObject = {};

  for (const [key, descriptor] of getMemberDescriptors(type)) {
    if (isMethod(descriptor)) {
      mockMethod(mock, key);
    } else if (isGetter(descriptor)) {
      mockGetter(mock, key);
    }
  }

  return mock as Mocked<T>;
}

export function provideMock<T>(type: Type<T>): Provider {
  return { provide: type, useValue: autoMock(type) };
}

// Collects every member of the class and its base classes.
// The most derived class wins when a member is overridden.
function getMemberDescriptors(type: Type<unknown>): Map<string, PropertyDescriptor> {
  const descriptors = new Map<string, PropertyDescriptor>();

  for (const prototype of getPrototypeChain(type)) {
    for (const key of getMemberNames(prototype)) {
      if (!descriptors.has(key)) {
        descriptors.set(key, getDescriptor(prototype, key));
      }
    }
  }

  return descriptors;
}

function getPrototypeChain(type: Type<unknown>): object[] {
  const chain: object[] = [];
  let prototype = type.prototype;

  while (isClassPrototype(prototype)) {
    chain.push(prototype);
    prototype = getParentPrototype(prototype);
  }

  return chain;
}

function isClassPrototype(prototype: object | null): prototype is object {
  return prototype !== null && prototype !== Object.prototype;
}

function getParentPrototype(prototype: object): object | null {
  return Object.getPrototypeOf(prototype);
}

function getMemberNames(prototype: object): string[] {
  return Object.getOwnPropertyNames(prototype).filter(isNotConstructor);
}

function isNotConstructor(key: string): boolean {
  return key !== 'constructor';
}

// Reads the descriptor instead of the value, so getters are not executed.
function getDescriptor(prototype: object, key: string): PropertyDescriptor {
  return Object.getOwnPropertyDescriptor(prototype, key)!;
}

function isMethod(descriptor: PropertyDescriptor): boolean {
  return typeof descriptor.value === 'function';
}

function isGetter(descriptor: PropertyDescriptor): boolean {
  return descriptor.get !== undefined;
}

function mockMethod(mock: MockObject, key: string): void {
  mock[key] = vi.fn();
}

// configurable, so a test can override it with vi.spyOn(mock, key, 'get')
function mockGetter(mock: MockObject, key: string): void {
  Object.defineProperty(mock, key, { get: () => undefined, configurable: true });
}
