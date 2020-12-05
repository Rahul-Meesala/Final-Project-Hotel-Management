package com.quinnox.hotelmanagementproject.service;

import java.util.List;

import com.quinnox.hotelmanagementproject.dto.PaymentDto;
import com.quinnox.hotelmanagementproject.entities.Payment;

public interface PaymentService {
	
	public boolean addPayment(PaymentDto payment);
	public List<Payment> getAllPayment();

}
