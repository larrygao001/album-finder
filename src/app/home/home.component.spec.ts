import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
// import { Routes } from '@angular/router';

describe('HomeComponent', () => {
  // let routes:Routes;
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title with Search Songs on iTuens!', ()=>{
    const titleElement: HTMLElement = fixture.nativeElement;
    const title = titleElement.querySelector('#title');
    expect(title.textContent).toEqual('Search songs on iTunes!');
  });

  it('should contain a A tag with textcontent Get Started',()=>{
    const aTagElement: HTMLElement = fixture.nativeElement;
    const link = aTagElement.querySelector("a");
    expect(link.textContent).toEqual('Get Started!');
  });

  // Integration test;
  it('should help you to redirect your search with the routerLink',()=>{
    const href = fixture.debugElement.query(By.css('a')).nativeElement
        .getAttribute('href');
    expect(href).toEqual('/search');
  })
});
