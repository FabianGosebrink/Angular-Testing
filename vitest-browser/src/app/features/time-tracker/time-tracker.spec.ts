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

  describe('Visual Regression Testing', () => {
    test('Time Tracker Stopped', async () => {
      // arrange
      const fixture = TestBed.createComponent(TimeTracker);

      // act
      await fixture.whenStable();

      // assert
      await expect(page.elementLocator(fixture.nativeElement)).toMatchScreenshot();
    });

    test('Time Tracker Started', async () => {
      // arrange
      const fixture = TestBed.createComponent(TimeTracker);
      await fixture.whenStable();

      // act
      await page.getByRole('button').click();
      await fixture.whenStable();

      // assert
      await expect(page.elementLocator(fixture.nativeElement)).toMatchScreenshot();
    });
  });
});
