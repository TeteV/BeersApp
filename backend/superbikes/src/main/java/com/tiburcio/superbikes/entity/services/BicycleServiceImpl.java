package com.tiburcio.superbikes.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tiburcio.superbikes.entity.dao.IBicycleDao;
import com.tiburcio.superbikes.entity.models.Bicycle;

@Service
public class BicycleServiceImpl implements IBicycleService {

	@Autowired
	IBicycleDao bicycleDao;
	
	@Override
	public List<Bicycle> getAll() {
		// TODO Auto-generated method stub
		return (List<Bicycle>) bicycleDao.findAll();
	}

}
