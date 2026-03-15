import { TimeTracker } from './time-tracker';
import { test } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { page } from 'vitest/browser';

describe('TimeTracker', () => {
  test('Should start tracking', async () => {
    // arrange
    TestBed.createComponent(TimeTracker);

    // act
    await page.getByRole('button').click();

    // assert
    await expect.element(page.getByRole('button')).toHaveTextContent('Stop Tracking');
    await expect.element(page.getByTestId('running-info')).toHaveTextContent('Running...');
  });

  test('Should stop tracking', async () => {
    // arrange
    TestBed.createComponent(TimeTracker);
    await page.getByRole('button').click();

    const runningInfoBefore = page.getByTestId('running-info').element();

    // act
    await page.getByRole('button').click();

    // assert
    await expect.element(runningInfoBefore).toBeTruthy();
    await expect.element(page.getByRole('button')).toHaveTextContent('Start Tracking');
    await expect.element(page.getByTestId('stopped-info')).toHaveTextContent('Stopped');
  });
});
