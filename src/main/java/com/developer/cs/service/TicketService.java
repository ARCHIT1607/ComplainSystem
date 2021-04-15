package com.developer.cs.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.developer.cs.entity.Ticket;
import com.developer.cs.exceptions.ComplaintSystemException;
import com.developer.cs.repository.TicketRepository;

@Service
public class TicketService {

	@Autowired
	TicketRepository ticketRepository;

	public List<Ticket>getAllTicketsByCustomer(Long userId) throws ComplaintSystemException{
		List<Ticket> getAllTicketsByCustomer = ticketRepository.getAllTicketsByCustomer(userId);
		if (getAllTicketsByCustomer.size() == 0 ) {
			System.out.println("exception");
			throw new ComplaintSystemException("No tickets present for customer");
		}
		return getAllTicketsByCustomer;
	}

	public Ticket addTicket(Ticket ticket) {
		Date date = new Date();
		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		String strDate = formatter.format(date);
		ticket.setCreate_date(strDate);
		return ticketRepository.save(ticket);
	}

	public Map<Object, Object> updateTicket(Long userId, Ticket ticket) throws ComplaintSystemException {
		Ticket oldTicket = ticketRepository.findByTicketId(ticket.getId());
		Map<Object, Object> map = new HashMap<Object, Object>();
			Date date = new Date();
			SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
			String strDate = formatter.format(date);
			if (oldTicket != null) {
				if (ticket.getStatus() != null && !ticket.getStatus().isEmpty()) {
					oldTicket.setUpdate_date(strDate);
					oldTicket.setStatus(ticket.getStatus());
				} else {
					System.out.println("Status is empty");
					throw new ComplaintSystemException("Status is empty");
				}
			} else {
				System.out.println("No Ticket present in db");
				throw new ComplaintSystemException("No Ticket present in db");
			}
			map.put("ticket", oldTicket);
			return map;
	}

	public List<Ticket> getAllTickets() {
		 List<Ticket> getAllTickets = ticketRepository.findAll();
		return getAllTickets;
	}

	public Ticket getTicketById(Long ticketId) {
		Ticket ticket = ticketRepository.findByTicketId(ticketId);
		return ticket;
	}
}
