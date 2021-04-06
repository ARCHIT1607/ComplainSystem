package com.developer.cs.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.developer.cs.entity.Ticket;
import com.developer.cs.repository.TicketRepository;

@Service
public class TicketService {

	@Autowired
	TicketRepository ticketRepository;

	public List<Ticket> getAllTicketsByCustomer(Long userId) {
		return ticketRepository.getAllTicketsByCustomer(userId);
	}

	public Ticket addTicket(Ticket ticket) {
		Date date = new Date();  
	    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");  
	    String strDate= formatter.format(date);  
		ticket.setCreate_date(strDate);
		return ticketRepository.save(ticket);
	}

}
