import { CustomAngularMaterialModule } from './custom-angular-material.module';

describe('CustomAngularMaterialModule', () => {
  let customAngularMaterialModule: CustomAngularMaterialModule;

  beforeEach(() => {
    customAngularMaterialModule = new CustomAngularMaterialModule();
  });

  it('should create an instance', () => {
    expect(customAngularMaterialModule).toBeTruthy();
  });
});
