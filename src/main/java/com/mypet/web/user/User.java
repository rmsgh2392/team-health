package com.mypet.web.user;

import java.io.Serializable;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Component
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "USERS")
public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	@Column(name = "USERID") @NotNull private Long userid;
	@Column(name = "UID") @NotNull private String uid;
	@Column(name = "PWD") @NotNull private String pwd;
	@Column(name = "UNAME") @NotNull private String uname;
	@Column(name = "ADDR") @NotNull private String addr;
	@Column(name = "HEIGHT") @NotNull private String height;
	@Column(name = "WEIGHT") @NotNull private String weight;
	@Column(name = "FAT") @NotNull private String fat;
	@Column(name = "MUSCLE") @NotNull private String muscle;
	@Column(name = "AGE") @NotNull private String age;
	@Column(name = "GENDER") @NotNull private boolean gender;
	
	@Builder
	public User(String uid,  String pwd,  String uname,  String addr,
			 String height,  String weight,  String fat,  String muscle,
			 String age,  boolean gender) {
		this.uid = uid;
		this.pwd = pwd;
		this.uname = uname;
		this.addr = addr;
		this.height = height;
		this.weight = weight;
		this.fat = fat;
		this.muscle = muscle;
		this.age = age;
		this.gender = gender;
	}
}
