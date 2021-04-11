package com.developer.cs.filters;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.filter.GenericFilterBean;

import com.developer.cs.constant.Constant;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

/*Filter file that gets value from header and checks if it matches with JWT token generated from login*/
public class AuthFilter extends GenericFilterBean {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,
    		FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpResponse = (HttpServletResponse) servletResponse;

        String authHeader = httpRequest.getHeader("Authorization");
        httpResponse.setHeader("Access-Control-Allow-Origin", httpRequest.getHeader("Origin"));
        httpResponse.setHeader("Access-Control-Allow-Credentials", "true");
        httpResponse.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        httpResponse.setHeader("Access-Control-Max-Age", "3600");
        httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
        if(authHeader != null) {
            String[] authHeaderArr = authHeader.split("Bearer ");
            if(authHeaderArr.length > 1 && authHeaderArr[1] != null) {
                String token = authHeaderArr[1];
                try {
                    Claims claims = Jwts.parser().setSigningKey(Constant.API_SECRET_KEY)
                            .parseClaimsJws(token).getBody();
                    httpRequest.setAttribute("userId", Long.parseLong(claims.get("userId").toString()));
                }catch (Exception e) {
                	System.out.println("exception "+e.getMessage());
                	Map<Object, Object> map = new HashMap<Object, Object>();
                	map.put("status", HttpStatus.UNAUTHORIZED.value());
                	map.put("errorMessage", "invalid/expired token");
                	map.put("error", HttpStatus.UNAUTHORIZED);
                	map.put("path", httpRequest.getRequestURL().toString());
                	httpResponse.getWriter().write(convertObjectToJson(map));
//                    httpResponse.sendError(HttpStatus.UNAUTHORIZED.value());
                    return;
                }
            } else {
            	System.out.println("exception bearer must be present");
            	Map<Object, Object> map = new HashMap<Object, Object>();
            	map.put("status", HttpStatus.FORBIDDEN.value());
            	map.put("errorMessage", "Authorization token must be Bearer [token]");
            	map.put("error", HttpStatus.FORBIDDEN);
            	map.put("path", httpRequest.getRequestURL().toString());
            	httpResponse.getWriter().write(convertObjectToJson(map));
//                httpResponse.sendError(HttpStatus.FORBIDDEN.value(), "Authorization token must be Bearer [token]");
                return;
            }
        } else {
        	System.out.println("exception Authorization token must be provided");
        	Map<Object, Object> map = new HashMap<Object, Object>();
        	map.put("status", HttpStatus.FORBIDDEN.value());
        	map.put("errorMessage", "Authorization token must be provided");
        	map.put("error", HttpStatus.FORBIDDEN);
        	map.put("path", httpRequest.getRequestURL().toString());
        	httpResponse.getWriter().write(convertObjectToJson(map));
//            httpResponse.sendError(HttpStatus.FORBIDDEN.value(), "Authorization token must be provided");
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
    
    private String convertObjectToJson(Object object) throws JsonProcessingException {
        if (object == null) {
            return null;
        }
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(object);
}
}