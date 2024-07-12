import {Component, inject, Input, OnInit} from '@angular/core';
import {SafeResourceUrl} from "@angular/platform-browser";
import {MercadoPagoService} from "../../../../core/services/mercado-pago/mercado-pago.service";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export default class PaymentComponent implements OnInit {
  public srcMercadoPago: SafeResourceUrl = ""
  private _mercadoPagoService: MercadoPagoService = inject(MercadoPagoService)

  ngOnInit() {
    this.srcMercadoPago = this._mercadoPagoService.srcMercadoPago
  }
}
