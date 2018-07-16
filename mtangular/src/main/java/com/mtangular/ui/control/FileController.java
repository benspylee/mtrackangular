package com.mtangular.ui.control;

import java.io.File;
import java.io.IOException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mtangular.ui.utils.ReturnStatus;
import com.mtrack.murupakkam.model.FileInfo;

@RestController
public class FileController {

	
	private static String UPLOAD_PATH="D:\\Barath-PC\\Temp\\upload";
	
	@RequestMapping(method=RequestMethod.POST,path="/fileupload",headers=("content-type=multipart/*"))
	public ResponseEntity<FileInfo> fileUpload(@RequestParam("file") MultipartFile multipartfile )
	{
		//String fileuploadstatus="File Upload " + ReturnStatus.SUCCESS.getMsg();
		FileInfo fileinfo=new FileInfo();
		HttpHeaders header=new HttpHeaders();
		if(!multipartfile.isEmpty())
		{
		String filename=	multipartfile.getOriginalFilename();
		File tobeUpload=new File(UPLOAD_PATH+File.separator+filename);
		fileinfo.setFilename(filename);
		fileinfo.setFilepath(tobeUpload.getAbsolutePath());
		fileinfo.setResponse(ReturnStatus.SUCCESS.getMsg());
		try {
			header.add("fileuploaded", filename);
			multipartfile.transferTo(tobeUpload);			
		} catch (Exception e) {
		//	fileuploadstatus="File Upload " + ReturnStatus.FAIL.getMsg();
			fileinfo.setResponse(ReturnStatus.FAIL.getMsg());
		}		
		return new ResponseEntity<>(fileinfo,header,HttpStatus.OK);		
	    }
		else
		{
			return new ResponseEntity<>(header,HttpStatus.BAD_REQUEST);
		}
	}
	
	
}
