package com.developer.cs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import com.developer.cs.filters.AuthFilter;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ComplaintSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComplaintSystemApplication.class, args);
	}

	/* Bean created to allow users to route to this api only if they are authenticated */
	@Bean
	public FilterRegistrationBean<AuthFilter> filterRegistrationBean() {
		FilterRegistrationBean<AuthFilter> registrationBean = new FilterRegistrationBean<>();
		AuthFilter authFilter = new AuthFilter();
		registrationBean.setFilter(authFilter);
		registrationBean.addUrlPatterns("/api/getUserDetails");
		registrationBean.addUrlPatterns("/ticket/*");
		return registrationBean;
	}
}
