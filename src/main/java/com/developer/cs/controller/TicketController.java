package com.developer.cs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins = "*")
public class TicketController {

	@Autowired
	TicketService ticketService;

	@GetMapping(value = "/getAllTicketsByCustomer/{username}")
	public List<Ticket> getAllTicketsByCustomer(@PathVariable("username") String username){
		List<Ticket> tickets = ticketService.getAllTicketsByCustomer(username);
		return tickets;
	}

	@PostMapping(value = "/addTicket")
	public Ticket addTicket(@RequestBody Ticket ticket){
		return ticketService.addTicket(ticket);
	}

}
