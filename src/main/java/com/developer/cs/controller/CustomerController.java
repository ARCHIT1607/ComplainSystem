package com.developer.cs.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.developer.cs.entity.Customer;
import com.developer.cs.service.CustomerService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:4200")

public class CustomerController {

	Logger log = LoggerFactory.getLogger(CustomerController.class);

	@Autowired
	private CustomerService customerService;

	@PostMapping(value = "/register")
	public Customer register(@RequestBody Customer customer) {
		log.info("register controller");
		Customer cus = customerService.register(customer);
		return cus;
	}

	@PostMapping(value = "/login")
	public Boolean login(@RequestBody Customer customer) {
		log.info("login controller");
		Boolean valid = customerService.validate(customer.getEmail(), customer.getPassword());
		if(valid == true) {
			return true;
		}
		else {
			return false;
		}
	}

	@GetMapping(value = "/getUserDetails")
	public List<Customer> getUserDetails(){
		log.info("GetUserDetails Controller");
		return customerService.getUserDetails();
		
	}

}
