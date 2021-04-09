package com.developer.cs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.developer.cs.entity.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long>{

	@Query("select t from Ticket t where t.userId=:userId")
	public List<Ticket> getAllTicketsByCustomer(Long userId);

	@Query("select t from Ticket t where t.id=:id")
	public Ticket findByTicketId(Long id);

}
