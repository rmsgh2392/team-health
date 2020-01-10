package com.mypet.web.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends CrudRepository<User, Long>{
	public User findByUidAndPwd(String uid, String pwd);
}
