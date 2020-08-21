import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  address: Address;
  id: string;

  constructor(private addressService: AddressService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.address = new Address();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    
    this.addressService.getAddress(this.id).subscribe(data => {
      console.log(data);
      this.address = data;
    }, err => console.log(err));
  }

  update(){
    this.addressService.updateAdress(this.id, this.address)
                        .subscribe(data => console.log(data), err => console.log(err));
    this.address = new Address();
    this.router.navigateByUrl('/address');
  }

}
