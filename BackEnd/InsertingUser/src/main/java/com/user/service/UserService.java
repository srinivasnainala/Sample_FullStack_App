package com.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.user.model.User;

@Service
public class UserService {

	@Autowired
	JdbcTemplate jdbc;
	public int add(User user) {
        int id=user.getId();
        String name=user.getName();
        int age=user.getAge();
        String department=user.getDepartment();
        String query = "INSERT INTO userdetails(id, name, department, age) VALUES(?, ?, ?, ?)";
        int status = jdbc.update(query, id, name, department, age);
		return status;
	}
}
