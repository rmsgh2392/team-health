package com.mypet.web.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
@Component
public class UserInit implements ApplicationRunner{
	
	private UserRepository userRepository;

	@Autowired
	public UserInit(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	@Override
	public void run(ApplicationArguments args) throws Exception {
		long count = userRepository.count();
		if(count == 0) {
			User user = null;
			String [][] usr = {{"rmsgh1","1","박근호","seoul","170.5","80","20","40","26","true"},
							   {"rmsgh2","1","박찬호","경기","171.5","81","22","43","25","true"},
							   {"rmsgh3","1","박첨지","부산","172.5","82","25","45","24","true"}};
			for(String[] arr : usr) {
				user = new User();
				user.setUid(arr[0]);
				user.setPwd(arr[1]);
				user.setUname(arr[2]);
				user.setAddr(arr[3]);
				user.setHeight(arr[4]);
				user.setWeight(arr[5]);
				user.setFat(arr[6]);
				user.setMuscle(arr[7]);
				user.setAge(arr[8]);
				user.setGender(Boolean.parseBoolean(arr[9]));
				userRepository.save(user);
			}
		}
		
	}

}
