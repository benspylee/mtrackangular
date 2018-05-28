package com.mtrack.murupakkam.model;

import com.mtrack.murupakkam.core.model.Mbasemodel;
import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

















@Entity
public class Mtrackpost
extends Mbasemodel
implements Serializable
{
	@Id
	@GeneratedValue
	private int postid;
	private String posttitle;
	private String posttitle2;
	private String postdesc;
	private String postimgurl;
	private Date createddate;
	private Integer cuser;
	private Integer status;
	private Date modifieddate;
	private Integer muser;
	private int newscategorycode;

	@OneToOne
	@JoinColumn(name="postid")
	private Mtrackpostview postinfo;

	public Mtrackpostview getPostinfo() {
		return postinfo;
	}

	public void setPostinfo(Mtrackpostview postinfo) {
		this.postinfo = postinfo;
	}

	public int getNewscategorycode()
	{
		return this.newscategorycode;
	}

	public void setNewscategorycode(int newscategorycode) {
		this.newscategorycode = newscategorycode;
	}

	public int getPostid() {
		return this.postid;
	}

	public void setPostid(int postid) {
		this.postid = postid;
	}

	public String getPosttitle() { return this.posttitle; }

	public void setPosttitle(String posttitle)
	{
		this.posttitle = posttitle;
	}

	public String getPosttitle2() { return this.posttitle2; }

	public void setPosttitle2(String posttitle2)
	{
		this.posttitle2 = posttitle2;
	}

	public String getPostdesc() { return this.postdesc; }

	public void setPostdesc(String postdesc)
	{
		this.postdesc = postdesc;
	}

	public String getPostimgurl() { return this.postimgurl; }

	public void setPostimgurl(String postimgurl)
	{
		this.postimgurl = postimgurl;
	}

	public Date getCreateddate() { return this.createddate; }

	public void setCreateddate(Date createddate)
	{
		this.createddate = createddate;
	}

	public Integer getCuser() { return this.cuser; }

	public void setCuser(Integer cuser)
	{
		this.cuser = cuser;
	}

	public Integer getStatus() { return this.status; }

	public void setStatus(Integer status)
	{
		this.status = status;
	}

	public Date getModifieddate() { return this.modifieddate; }

	public void setModifieddate(Date modifieddate)
	{
		this.modifieddate = modifieddate;
	}

	public Integer getMuser() { return this.muser; }

	public void setMuser(Integer muser)
	{
		this.muser = muser;
	}
}
