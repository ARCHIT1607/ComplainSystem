package com.developer.cs.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class ComplaintSystemException extends RuntimeException {

	 public ComplaintSystemException(String message) {
	        super(message);
	 }
}
