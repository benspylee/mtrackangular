package com.mtrack.murupakkam.model;

import com.mtrack.murupakkam.core.model.Mbasemodel;
import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;










@Entity
public class Mtrackpostview
extends Mbasemodel
implements Serializable
{
	
	@GeneratedValue
	private int postviewid;
	@Id
	//@Column(name = "postid")
	private Integer postid=0;
	private String postimgurls;
	private String postviewdesc;
	private String postfileid;
	private Date createddate;
	private Integer cuser=0;
	private Integer status=0;
	private Date modifieddate;
	private Integer muser=0;

/*	@OneToOne(mappedBy="postinfo",optional=false)
	//@JoinColumn()
	private Mtrackpost post;



	public Mtrackpost getPost() {
		return post;
	}

	public void setPost(Mtrackpost post) {
		this.post = post;
	}*/



	public Integer getPostid() { return this.postid; }

	public void setPostid(Integer postid)
	{
		this.postid = postid;
	}

	public String getPostimgurls() { return this.postimgurls; }

	public void setPostimgurls(String postimgurls)
	{
		this.postimgurls = postimgurls;
	}

	public String getPostviewdesc() { return this.postviewdesc; }

	public void setPostviewdesc(String postviewdesc)
	{
		this.postviewdesc = postviewdesc;
	}

	public String getPostfileid() { return this.postfileid; }

	public void setPostfileid(String postfileid)
	{
		this.postfileid = postfileid;
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
