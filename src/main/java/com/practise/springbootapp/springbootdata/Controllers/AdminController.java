package com.practise.springbootapp.springbootdata.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
	
	@RequestMapping("/hello")
	public String getHello() {
		return "Hello World";
	}
	
	
	@RequestMapping("/hello1")
	public String getHello11() {
		return "Hello shhfdjfdhj";
	}

}
