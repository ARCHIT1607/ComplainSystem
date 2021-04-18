package com.developer.cs.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.developer.cs.entity.Customer;
import com.developer.cs.service.CustomerService;
import com.developer.cs.constant.Constant;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {

	Logger log = LoggerFactory.getLogger(CustomerController.class);

	@Autowired
	private CustomerService customerService;

	@PostMapping(value = "/register")
	public ResponseEntity<Map<String, Object>> register(@RequestBody Customer customer) {
		log.info("register controller");
		Map<String, Object> errorMessage = new HashMap<String, Object>();
		List<String> getUserDetails = customerService.getUserDetails();
		for(String s: getUserDetails) {
			if(s.equalsIgnoreCase(customer.getEmail())) {
				errorMessage.put("errorMessage", "Email already exists, Please use another email");
				return new ResponseEntity<>(errorMessage, HttpStatus.OK);
			}
		}
		Customer cus = customerService.register(customer);
		return new ResponseEntity<>(generateJWTToken(customer), HttpStatus.OK);
	}

	@PostMapping(value = "/login")
	public ResponseEntity<Map<String, Object>> login(@RequestBody Customer customer) {
		log.info("login controller");
		Boolean valid = customerService.validate(customer.getEmail(), customer.getPassword());
		if(valid == true) {
			Customer validCustomer = customerService.getUserByEmail(customer.getEmail());
			customer.setId(validCustomer.getId());
			customer.setUsername(validCustomer.getUsername());
			customer.setRole(validCustomer.getRole());
			return new ResponseEntity<>(generateJWTToken(customer), HttpStatus.OK);
		}
		else {
			Map<String, Object> map = new HashMap();
			 map.put("errorMessage", "Password is incorrect");
			return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
		}
	}

	@GetMapping(value = "/getUserDetails")
	public List<String> getUserDetails(){
		log.info("GetUserDetails Controller");
		return customerService.getUserDetails();
	}

	/* Code to generate JWT */
	private Map<String, Object> generateJWTToken(Customer user) {
        long timestamp = System.currentTimeMillis();
        String token = Jwts.builder().signWith(SignatureAlgorithm.HS256, Constant.API_SECRET_KEY)
                .setIssuedAt(new Date(timestamp))
                .setExpiration(new Date(timestamp + Constant.TOKEN_VALIDITY))
                .claim("userId", user.getId())
//                .claim("email", user.getEmail())
//                .claim("password", user.getPassword())
                .compact();
        Map<String, Object> map = new HashMap();
        map.put("token", token);
        map.put("customer", user);
        return map;
	}
}