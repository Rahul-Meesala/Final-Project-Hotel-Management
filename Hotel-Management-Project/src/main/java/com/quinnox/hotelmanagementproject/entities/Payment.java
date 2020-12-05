package com.quinnox.hotelmanagementproject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Payment")
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "paymentId")
	private int paymentId;

	@Column(name = "roomId")
	private int roomId;

	@Column(name = "custName")
	private String custName;

	@Column(name = "roomCost")
	private long roomCost;
	
	@Column(name = "cardNumber")
	private String cardNumber;

	@Column(name = "cvv")
	private long cvv;

}
