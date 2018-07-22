package com.mtrack.murupakkam.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.mtrack.murupakkam.core.model.Mbasemodel;

@Entity
@Table(name="MTRACK_USER")
public class MtrackUser extends Mbasemodel
implements Serializable {
	@Id
	@GeneratedValue
	private int usercode;
	private String username;
	private String password;
	private int rolecode;
	private int status;
	
	
	public int getRolecode() {
		return rolecode;
	}
	public void setRolecode(int rolecode) {
		this.rolecode = rolecode;
	}
	public int getUsercode() {
		return usercode;
	}
	public void setUsercode(int usercode) {
		this.usercode = usercode;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}

}
