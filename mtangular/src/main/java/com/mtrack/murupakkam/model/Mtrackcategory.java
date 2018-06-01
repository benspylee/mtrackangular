package com.mtrack.murupakkam.model;

import com.mtrack.murupakkam.core.model.Mbasemodel;
import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;



@Entity
public class Mtrackcategory
extends Mbasemodel
implements Serializable
{
	@Id
	@GeneratedValue
	private int newscategorycode;
	private String newscategoryname1;
	private String newscategoryname2;
	private Integer status;
	private String categoryinfo;
	private int postcount;
	


	public int getPostcount()
	{
		return this.postcount;
	}

	public void setPostcount(int postcount) {
		this.postcount = postcount;
	}

	public String getCategoryinfo() {
		return this.categoryinfo;
	}

	public void setCategoryinfo(String categoryinfo) {
		this.categoryinfo = categoryinfo;
	}

	public int getNewscategorycode() {
		return this.newscategorycode;
	}

	public void setNewscategorycode(int newscategorycode) {
		this.newscategorycode = newscategorycode;
	}

	public String getNewscategoryname1() { return this.newscategoryname1; }

	public void setNewscategoryname1(String newscategoryname1)
	{
		this.newscategoryname1 = newscategoryname1;
	}

	public String getNewscategoryname2() { return this.newscategoryname2; }

	public void setNewscategoryname2(String newscategoryname2)
	{
		this.newscategoryname2 = newscategoryname2;
	}

	public Integer getStatus() { return this.status; }

	public void setStatus(Integer status)
	{
		this.status = status;
	}
}
