package com.developer.cs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.developer.cs.entity.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long>{

	@Query("select t from Ticket t where t.created_by =:username")
	public List<Ticket> getAllTicketsByCustomer(@Param("username") String username);
}
