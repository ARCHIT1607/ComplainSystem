package com.developer.cs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.developer.cs.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

	@Query("Select c from Customer c where c.email=:email")
	public Customer findByEmail(@Param("email") String email);

	@Query("select c.email from Customer c")
	public List<String> findAllByEmail();

}
