package com.quinnox.hotelmanagementproject.dao;

import java.util.List;

import com.quinnox.hotelmanagementproject.dto.PaymentDto;
import com.quinnox.hotelmanagementproject.entities.Payment;

public interface PaymentDao {

	public boolean addPayment(PaymentDto payment);

	public List<Payment> getAllPayment();

}
