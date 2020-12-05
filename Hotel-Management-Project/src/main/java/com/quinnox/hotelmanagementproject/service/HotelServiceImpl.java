package com.quinnox.hotelmanagementproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelmanagementproject.dao.HotelDao;
import com.quinnox.hotelmanagementproject.entities.Hotel;

@Service
public class HotelServiceImpl implements HotelService {

	@Autowired
	HotelDao dao;

	@Override
	public boolean addHotel(Hotel hotel) {
		dao.addHotel(hotel);
		return true;
	}

	@Override
	public List<Hotel> getAllHotels() {
		return dao.getAllHotels();
	}

	@Override
	public boolean updateHotel(Hotel hotel) {
		dao.updateHotel(hotel);
		return true;
	}

	@Override
	public int deleteHotel(int hotelId) {
		dao.deleteHotel(hotelId);
		return 1;
	}

	@Override
	public Hotel getOneHotel(int hotelId) {
		return dao.getOneHotel(hotelId);
	}

}
