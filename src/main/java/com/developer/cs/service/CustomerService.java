package com.developer.cs.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.developer.cs.entity.Customer;
import com.developer.cs.repository.CustomerRepository;

@Service
public class CustomerService {

	Logger log = LoggerFactory.getLogger(CustomerService.class);

	@Autowired
	private CustomerRepository customerRepository;

	private PasswordEncoder passwordEncoder;

	public CustomerService() {
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	public Customer register(Customer customer) {
		log.info("register service");
		String encodedPassword = passwordEncoder.encode(customer.getPassword());
		customer.setPassword(encodedPassword);
		return customerRepository.save(customer);
	}

	private Customer getCustomer(String email) {
		Customer cus = customerRepository.findByEmail(email);
		return cus;
	}

	public Boolean validate(String email, String password) {
		Customer cus = getCustomer(email);
		Boolean validate = passwordEncoder.matches(password, cus.getPassword());
		return validate;
	}
}
