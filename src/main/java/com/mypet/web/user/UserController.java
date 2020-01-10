package com.mypet.web.user;

import java.util.HashMap;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mypet.web.proxy.Trunk;
import com.mypet.web.util.Printer;


@RestController
@CrossOrigin
public class UserController {
	
	@Autowired private UserRepository userRepository;
	@Autowired private User user;
	@Autowired Printer printer;
	@Autowired Trunk<Object> trunk;
	
	
	@PostMapping("/login")
	public HashMap<String, Object> login(@RequestBody User param){
		printer.accept("로그인 들어옴");
		user = userRepository.findByUidAndPwd(param.getUid(),param.getPwd());
		trunk.put("user", user);
		printer.accept("보내는 값" + trunk.get());
		return trunk.get();
	} 
}
