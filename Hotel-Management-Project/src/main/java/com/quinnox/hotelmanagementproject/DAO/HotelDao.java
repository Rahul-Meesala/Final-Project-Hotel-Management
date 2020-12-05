package com.quinnox.hotelmanagementproject.dao;

import java.util.List;

import com.quinnox.hotelmanagementproject.entities.Hotel;

public interface HotelDao {

	public boolean addHotel(Hotel hotel);

	public List<Hotel> getAllHotels();

	public boolean updateHotel(Hotel hotel);

	public int deleteHotel(int hotelId);

	public Hotel getOneHotel(int hotelId);

}
