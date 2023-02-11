import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersJasmineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be have matcher use toEqual', () => {
    expect(true).toEqual(true);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
  it('Should be have matcher use toBe', () => {
    let nomes = ['Vicente', 'Luiz', 'Malu']
    let nomes2 = ['Vicente', 'Luiz', 'Malu']
    let novo = nomes
    // Fail because they don't are same object
    // expect(nomes).toBe(nomes2)
    expect(nomes).toBe(novo)
  });
  it('Should be have matcher use toBeTruthy', () => {
    expect(true).toBeTruthy()
    expect(10).toBeTruthy()
    expect({}).toBeTruthy()
  });
  it('Should be have matcher use toBeFalsy', () => {
    // don't need an argument
    expect(false).toBeFalsy()
    expect("").toBeFalsy()
    expect(null).toBeFalsy()
    expect(NaN).toBeFalsy()
  });
  it('Should be have matcher use toBeTrue', () => {
    expect(true).toBeTrue()
  })
  it('Should be have matcher use toBeFalse', () => {
    expect(false).toBeFalse()
  })
  it('Should be have matcher use not', () => {
    expect('Vicente').not.toEqual('Luiz')
    expect('Vicente').not.toContain('Lu')
  })
  it('Should be have matcher use toContain', () => {
    expect('Vicente').toContain('Vic')
    expect('Vicente').toContain('te')
    expect([1, 2, 3]).toContain(1)
    expect([1, 2, 'Vicente']).toContain('Vicente')
  })
  it('Should be have matcher use toBeDefined', () => {
    let name = 'Vicente'
    let age
    expect(name).toBeDefined()
    expect(age).not.toBeDefined()
  })
  it('Should be have matcher use toBeUndefined', () => {
    let name = 'Vicente'
    let age
    expect(age).toBeUndefined()
    expect(name).not.toBeUndefined()
  })
  it('Should be have matcher use toBeNull', () => {
    let name = 'Vicente'
    expect(null).toBeNull()
    expect(name).not.toBeNull()
  })

  it('Should be have matcher use toBeNaN', () => {
    expect(NaN).toBeNaN()
  })

  it('Should be have matcher use toBeCloseTo', () => {
    expect(35.20).toBeCloseTo(35.25, 1)
    expect(35.20).not.toBeCloseTo(35.26, 1)
  })

  it('Should be have matcher use toMatch', () => {
    expect('Marvel').toMatch(/Mar/)
    expect('Marvel').not.toMatch(/mar/)
  })


  it('Should be have matcher use toThrow', () => {
    expect(function () {
      throw new Error('Meu erro')
    }).toThrow()
  })

  it('Should be have matcher use toBeGreatherThan', () => {
    expect(10).toBeGreaterThan(1)
  })

  it('Should be have matcher use toBeLessThan', () => {
    expect(10).toBeLessThan(20)
  })


});
