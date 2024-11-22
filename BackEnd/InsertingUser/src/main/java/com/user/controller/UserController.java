package com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.model.User;
import com.user.service.UserService;

@RestController
@RequestMapping("/home/users")
public class UserController {
@Autowired
UserService userservice;

@PostMapping("/add")
public String add(@RequestBody User user)
{
	int status=userservice.add(user);
	if(status!=-1)
	{
		return "Inserted Successfully";
	}
	else
	{
		return "Failed to insert";
	}
}
}
