package com.tiburcio.superbikes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiburcio.superbikes.entity.models.Bicycle;
import com.tiburcio.superbikes.entity.services.IBicycleService;

@RestController
public class BicycleController {
	
	@Autowired
	IBicycleService bicycleService;
	// Here are the end-points
	
	@GetMapping("/api/bicycles")
	private List<Bicycle> getAll(){
		return bicycleService.getAll();
	}
}
