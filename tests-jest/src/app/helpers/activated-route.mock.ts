import { Provider } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Params } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

export function provideActivatedRoute(
  initialRouteParams: TestRouteParams
): Provider[] {
  const activatedRouteMock = new ActivatedRouteMock(initialRouteParams);

  return [
    {
      provide: ActivatedRouteMock,
      useValue: activatedRouteMock,
    },
    {
      provide: ActivatedRoute,
      useExisting: ActivatedRouteMock,
    },
  ];
}

export interface TestRouteParams {
  params: Params;
  queryParams: Params;
  fragment: string | null;
}

export class ActivatedRouteMock {
  private innerTestParams?: Params;
  private innerTestQueryParams?: Params;
  private innerFragment?: string | null;
  private paramsSubject? = new BehaviorSubject(this.testParams);
  public params = this.paramsSubject!.asObservable();
  private queryParamsSubject? = new BehaviorSubject(this.testQueryParams);
  public queryParams = this.queryParamsSubject!.asObservable();
  private fragmentSubject? = new BehaviorSubject(this.testFragment);
  public fragment = this.fragmentSubject!.asObservable();

  constructor(initialRouteParams?: TestRouteParams) {
    const { params, queryParams, fragment } = initialRouteParams || {
      params: {},
      queryParams: {},
      fragment: null,
    };

    this.setTestParams({ params, queryParams, fragment });
  }

  public get paramMap() {
    return of(convertToParamMap(this.testParams));
  }

  public get snapshot(): {} {
    return {
      params: this.testParams,
      queryParams: this.testQueryParams,
      paramMap: convertToParamMap(this.testParams),
      queryParamMap: convertToParamMap(this.testQueryParams),
      root: {
        firstChild: this.firstChild,
      },
      url: null,
      fragment: this.testFragment,
    };
  }

  public get firstChild(): {} {
    return {
      snapshot: {
        paramMap: convertToParamMap(this.testParams),
        queryParamMap: convertToParamMap(this.testQueryParams),
        fragment: this.testFragment,
      },
    };
  }

  private get testParams(): Params {
    return this.innerTestParams as Params;
  }

  private get testQueryParams(): Params {
    return this.innerTestQueryParams as Params;
  }

  private get testFragment(): string | null | undefined {
    return this.innerFragment;
  }

  public setTestParams({ params, queryParams, fragment }: TestRouteParams) {
    this.innerTestParams = params;
    this.innerTestQueryParams = queryParams;
    this.innerFragment = fragment;

    if (this.paramsSubject) {
      this.paramsSubject.next(params);
    }

    if (this.queryParamsSubject) {
      this.queryParamsSubject.next(queryParams);
    }

    if (this.fragmentSubject) {
      this.fragmentSubject.next(fragment);
    }
  }
}
