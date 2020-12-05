package com.quinnox.hotelmanagementproject.service;

import java.util.List;

import com.quinnox.hotelmanagementproject.entities.Hotel;

public interface HotelService {

	public boolean addHotel(Hotel hotel);

	public List<Hotel> getAllHotels();

	public boolean updateHotel(Hotel hotel);

	public int deleteHotel(int hotelId);

	public Hotel getOneHotel(int hotelId);

}
