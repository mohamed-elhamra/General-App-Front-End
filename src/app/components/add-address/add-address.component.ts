import { Router } from '@angular/router';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address: Address = new Address();

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.addressService.saveAddress(this.address)
                        .subscribe(res => console.log(res), err => console.log(err));
    this.address = null;
    this.router.navigateByUrl('/address');
  }
}
