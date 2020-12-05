package com.quinnox.hotelmanagementproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelmanagementproject.dao.PaymentDao;
import com.quinnox.hotelmanagementproject.dto.PaymentDto;
import com.quinnox.hotelmanagementproject.entities.Payment;

@Service
public class PaymentServiceImpl implements PaymentService {

	@Autowired
	PaymentDao dao;

	@Override
	public boolean addPayment(PaymentDto payment) {

		return dao.addPayment(payment);
	}

	@Override
	public List<Payment> getAllPayment() {

		return dao.getAllPayment();
	}

}
