package com.quinnox.hotelmanagementproject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "Room")
@Data
public class Room {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "roomId")
	private int roomId;

	@Column(name = "roomType")
	private String roomType;

	@Column(name = "roomCost")
	private int roomCost;
	
	@Column(name = "roomStatus")
	private int roomStatus;
	
}
