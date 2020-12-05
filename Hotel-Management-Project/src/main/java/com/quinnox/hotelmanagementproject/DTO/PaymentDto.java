package com.quinnox.hotelmanagementproject.dto;

import lombok.Data;

@Data
public class PaymentDto {

	private int paymentId;

	private int roomId;

	private String custName;

	private long roomCost;
	
	private String cardNumber;

	private long cvv;

}
