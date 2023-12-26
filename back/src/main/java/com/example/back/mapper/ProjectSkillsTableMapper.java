package com.example.back.mapper;


import com.example.back.dto.ProjectDTO;
import com.example.back.dto.ProjectSkillsTableDTO;
import com.example.back.entity.ProjectEntity;
import com.example.back.entity.ProjectSkillsTableEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ProjectSkillsTableMapper {
    ProjectSkillsTableEntity toEntity(ProjectSkillsTableDTO dto);
    ProjectSkillsTableDTO toDTO(ProjectSkillsTableEntity entity);
}
