import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-6" style="width:50%;">
       
          
              <p view-more viewHeight="55" (showMore)="showMore($event)">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae risus vel erat malesuada viverra non nec velit. Fusce varius eleifend augue in tincidunt. Integer bibendum risus nulla, et consequat lorem aliquet quis. Integer dictum varius orci ut cursus. Nam et commodo neque. Cras maximus commodo tincidunt. Suspendisse tempus sit amet neque quis tempus. Curabitur posuere lectus ex, sed pharetra tortor iaculis at. Aenean tellus tellus, tincidunt a tristique non, porttitor eu ipsum. Aliquam erat volutpat. Suspendisse potenti. Integer vehicula ligula nec lectus pharetra, et vestibulum turpis gravida. Donec vitae dui diam.
              </p>
               <p view-more viewHeight="55" (showMore)="showMore($event)">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae risus vel erat malesuada viverra non nec velit. Fusce varius eleifend augue in tincidunt. Integer bibendum risus nulla, et consequat lorem aliquet quis. Integer dictum varius orci ut cursus. Nam et commodo neque. Cras maximus commodo tincidunt. Suspendisse tempus sit amet neque quis tempus. Curabitur posuere lectus ex, sed pharetra tortor iaculis at. Aenean tellus tellus, tincidunt a tristique non, porttitor eu ipsum. Aliquam erat volutpat. Suspendisse potenti. Integer vehicula ligula nec lectus pharetra, et vestibulum turpis gravida. Donec vitae dui diam.
          
                Nam accumsan urna placerat facilisis sagittis. Proin sit amet consequat tellus. Nam molestie at risus vitae tristique. Phasellus aliquet pharetra molestie. Duis hendrerit metus et viverra congue. Sed eu mauris nec ipsum ullamcorper pharetra. Phasellus quis lorem malesuada odio placerat blandit. Morbi aliquam bibendum felis, sed placerat massa ullamcorper eget. Nam aliquet tempus orci sit amet tempor. Etiam massa magna, pulvinar vel libero in, cursus eleifend est. Quisque fringilla blandit condimentum. Nulla elit dui, fermentum vitae turpis eu, mattis fringilla dui. Donec luctus suscipit nunc vitae elementum. Integer vel euismod turpis. Suspendisse eu faucibus purus.
            
                Curabitur sodales enim ac sollicitudin fermentum. Donec non mauris at nisi tempus dapibus nec in justo. Mauris vel mi sollicitudin, ornare nibh eget, cursus augue. Vivamus tristique enim vitae molestie placerat. Curabitur pretium tortor ut neque viverra, a dapibus turpis blandit. Donec ultrices facilisis venenatis. Vivamus auctor nibh eget leo condimentum venenatis. Nulla facilisi. Nulla id neque erat. Ut imperdiet aliquet vulputate. Curabitur erat risus, lacinia vel ornare mattis, porta quis orci. Nam vitae tincidunt nulla. Maecenas mollis laoreet turpis, a lacinia sem feugiat vel. Fusce lobortis libero nec molestie accumsan.
              </p>
        </div>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'app';
  showMore(event) {
    console.log('event',event);    
  }
}
