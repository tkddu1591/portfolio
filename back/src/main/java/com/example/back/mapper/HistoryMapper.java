package com.example.back.mapper;


import com.example.back.dto.HistoryDTO;
import com.example.back.dto.ProjectDTO;
import com.example.back.entity.HistoryEntity;
import com.example.back.entity.ProjectEntity;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface HistoryMapper {
    HistoryEntity toEntity(HistoryDTO dto);
    HistoryDTO toDTO(HistoryEntity entity);
}
