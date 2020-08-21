import { Router } from '@angular/router';
import { Address } from './../../models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses: Address[] = [];

  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAddresses();
  }

  getAllAddresses(){
    this.addressService.getAll().subscribe((res: Address[]) => this.addresses = res);
  }

  delete(id: string){
    console.log(id);
    this.addressService.deleteAddress(id)
                        .subscribe(
                          res => {
                          console.log(res);
                          this.getAllAddresses();
                        },
                          err => console.log(err)
                        );
  }

  edit(id: string){
    this.router.navigate(['/address/edit/',id]);
  }

}
