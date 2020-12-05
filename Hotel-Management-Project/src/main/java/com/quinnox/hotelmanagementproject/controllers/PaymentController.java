package com.quinnox.hotelmanagementproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.hotelmanagementproject.dto.PaymentDto;
import com.quinnox.hotelmanagementproject.entities.Payment;
import com.quinnox.hotelmanagementproject.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController {
	
	@Autowired
	PaymentService service;

	@PostMapping("/addpay")
	public boolean addpayment(@RequestBody PaymentDto payment) {
		return service.addPayment(payment);
		
	}
	@GetMapping("/getallpay")
	public List<Payment> getallpay(){
		return service.getAllPayment();
	}
}
