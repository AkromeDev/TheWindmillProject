import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TimesDirective } from './times.directive';

let viewContainer: ViewContainerRef;
let templateRef: TemplateRef<any>;

describe('TimesDirective', () => {
  it('should create an instance', () => {
    const directive = new TimesDirective(viewContainer, templateRef);
    expect(directive).toBeTruthy();
  });
});
