package com.quinnox.hotelmanagementproject.dao;

import java.util.List;

import com.quinnox.hotelmanagementproject.dto.RoomDto;
import com.quinnox.hotelmanagementproject.entities.Room;

public interface RoomDao {

	public boolean addRoom(RoomDto room);

	public List<Room> getAllRooms();

	public boolean updateRoom(int roomId, RoomDto room);

	public boolean deleteRoom(int roomId);

	public Room getOneRoom(int roomId);

	public List<Room> getVaccantRooms();

}
