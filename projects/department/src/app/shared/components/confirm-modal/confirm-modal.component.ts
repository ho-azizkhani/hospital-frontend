import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit
{
  @Input() title: string = '';
  @Input() notificationText: string = '';
  @Input() yesButtonText: string = '';
  @Input() NoButtonText: string = '';

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void
  {
  }

  confirm(isApproved: boolean)
  {
    this.modal.close(isApproved);
  }
}
