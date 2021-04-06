package com.developer.cs.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.developer.cs.entity.Ticket;
import com.developer.cs.service.TicketService;

@RestController
@RequestMapping(value = "/ticket")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TicketController {

	@Autowired
	TicketService ticketService;

	@GetMapping(value = "/getAllTicketsByCustomer")
	public ResponseEntity<List<Ticket>> getAllTicketsByCustomer(HttpServletRequest request){
		long userId = (Long) request.getAttribute("userId");
		List<Ticket> tickets = ticketService.getAllTicketsByCustomer(userId);
		return new ResponseEntity<>(tickets, HttpStatus.OK);
	}

	@PostMapping(value = "/addTicket")
	public ResponseEntity<Ticket> addTicket(@RequestBody Ticket ticket){
		return new ResponseEntity<>(ticketService.addTicket(ticket), HttpStatus.CREATED);
	}

}
